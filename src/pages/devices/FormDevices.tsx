"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const deviceSchema = z.object({
  name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  onecode: z.string().regex(/^[a-zA-Z0-9_-]+$/, {
    message: "O código deve conter apenas letras, números, hífen e underscore.",
  }).min(5, { message: "O código deve ter pelo menos 5 caracteres." }),
  localization: z.string().min(5, { message: "Informe uma localização válida." }),
  mqtt_topic: z.string().min(3, { message: "O tópico MQTT deve ter pelo menos 3 caracteres." }),
});

export type DeviceFormValues = z.infer<typeof deviceSchema>;

interface DeviceFormProps {
  defaultValues?: DeviceFormValues;
  onSubmit: (values: DeviceFormValues) => Promise<void>;
  submitLabel?: string;
}

export function DeviceForm({ defaultValues, onSubmit, submitLabel = "Salvar" }: DeviceFormProps) {
  const form = useForm<DeviceFormValues>({
    resolver: zodResolver(deviceSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: defaultValues ?? {
      name: "",
      onecode: "",
      localization: "",
      mqtt_topic: "",
    },
  });

  return (
    <>
    <DialogContent className="w-80 h-min md:w-full md:max-w-md">
           <DialogHeader>
             <DialogTitle>Cadastrar Dispositivo</DialogTitle>

             <DialogDescription>
               Siga as boas práticas ao preencher o formulário.
            </DialogDescription>

           </DialogHeader>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4">

          <div className="grid gap-3">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Câmera vaga 01" {...form.register("name")} />
              {form.formState.errors.name && form.formState.touchedFields.name && (
                <p className="text-sm font-medium text-red-500">
                  {form.formState.errors.name.message}
                </p>
              )}    
            </div>

            <div className="grid gap-3">
              <Label htmlFor="onecode">Código único (ID ESP32)</Label>
              <Input id="onecode" placeholder="esp32cam_21ab" {...form.register("onecode")} />
              {form.formState.errors.onecode && (
                <p className="text-sm font-medium text-red-500">
                  {form.formState.errors.onecode.message}
                </p>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="localization">Localização</Label>
              <Input id="localization" placeholder="Vaga 01 - Bloco A" {...form.register("localization")} />
              {form.formState.errors.localization && (
                <p className="text-sm font-medium text-red-500">
                  {form.formState.errors.localization.message}
                </p>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="mqtt_topic">Tópico MQTT</Label>
              <Input id="mqtt_topic" placeholder="cameras/vaga01" {...form.register("mqtt_topic")} />
              {form.formState.errors.mqtt_topic && (
                <p className="text-sm font-medium text-red-500">
                  {form.formState.errors.mqtt_topic.message}
                </p>
              )}
            </div>
          </div>

            <div className="flex justify-end gap-4 pt-6">

                <DialogClose asChild>
                  <Button variant="outline">Cancelar</Button>
                </DialogClose>

                <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Salvando...' : submitLabel}
                </Button>
            </div>
      </form>
    </DialogContent>
    </>
  );
}