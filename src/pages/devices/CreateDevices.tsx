import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DeviceForm, DeviceFormValues } from "./FormDevices";
import { toast } from "sonner";

export function DialogCreateDevice() {
  const [open, setOpen] = useState(false);

  async function handleSubmit(values: DeviceFormValues) {
    try {
      const response = await fetch("/api/devices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Erro ao criar dispositivo");

      toast.success("Dispositivo criado com sucesso!");
      setOpen(false);
    } catch {
      toast.error("Falha ao criar dispositivo");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Adicionar dispositivo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar dispositivo</DialogTitle>
        </DialogHeader>

        <DeviceForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}