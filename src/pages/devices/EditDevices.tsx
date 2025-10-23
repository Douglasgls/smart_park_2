// import { Button } from "@/components/ui/button";

// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Pencil } from "lucide-react";

// export function DialogEditDevices() {
//   return (
//     <Dialog>
//       <form>
//         <DialogTrigger asChild>
//           <Button 
//             variant="ghost" 
//             size="icon" 
//             onClick={() => console.log('Editar Dispositivo ESP32')} 
//             className="h-8 w-8"
//             >
//             <Pencil className="h-4 w-4" /> 
//         </Button>
//         </DialogTrigger>

//         <DialogContent className="w-80 h-min md:w-full md:max-w-md">

//           <DialogHeader>

//             <DialogTitle>Editar Dispositivo</DialogTitle>

//             <DialogDescription>
//               Preencha os dados abaixo para editar o dispositivo de monitoramento.
//             </DialogDescription>

//           </DialogHeader>

//           <div className="grid gap-4">

//             <div className="grid gap-3">
//               <Label htmlFor="name-1">Nome</Label>
//               <Input id="name" name="name" placeholder="Câmera vaga 01" />
//             </div>

//             <div className="grid gap-3">
//               <Label htmlFor="onecode">Código único (ID ESP32)</Label>
//               <Input id="onecode" name="onecode" placeholder="esp32cam_21ab" />
//             </div>

//             <div className="grid gap-3">
//               <Label htmlFor="localization">Localização</Label>
//               <Input id="localization" name="localization" placeholder="Vaga 01 - Bloco A" />
//             </div>

//             <div className="grid gap-3">
//               <Label htmlFor="mqtt_topic">Tópico MQTT</Label>
//               <Input id="mqtt_topic" name="mqtt_topic" placeholder="cameras/vaga01" />
//             </div>

//           </div>

//           <DialogFooter>
          
//             <DialogClose asChild>
//               <Button variant="outline">Cancel</Button>
//             </DialogClose>
          
//             <Button type="submit">Save changes</Button>
          
//           </DialogFooter>

//         </DialogContent>
//       </form>
//     </Dialog>
//   )
// }

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