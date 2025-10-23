import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DeviceForm, DeviceFormValues } from "./FormDevices";
import { toast } from "sonner";
import { Pencil } from "lucide-react";

interface DialogEditDeviceProps {
  device: DeviceFormValues & { id: string };
}

export function DialogEditDevice({ device }: DialogEditDeviceProps) {
  const [open, setOpen] = useState(false);

  async function handleSubmit(values: DeviceFormValues) {
    try {
      const response = await fetch(`/api/devices/${device.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Erro ao atualizar");

      toast.success("Dispositivo atualizado!");
      setOpen(false);
    } catch {
      toast.error("Falha ao atualizar dispositivo");
    }
  }

  return (
    <>

    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => console.log('Editar fatura INV001')} 
                className="h-8 w-8"
            >
                <Pencil className="h-4 w-4" /> 
            </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar dispositivo</DialogTitle>
        </DialogHeader>

        <DeviceForm
          defaultValues={device}
          onSubmit={handleSubmit}
          submitLabel="Atualizar"
        />
      </DialogContent>
    </Dialog>
    </>
  );
}