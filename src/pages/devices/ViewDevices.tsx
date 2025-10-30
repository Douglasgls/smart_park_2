// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Eye } from "lucide-react";

// interface DeviceFormValues {
//     id: string;
//     name: string;
//     onecode: string;
//     localization: string;
//     mqtt_topic: string;
// }

// interface DialogViewDevicesProps {
//     device: DeviceFormValues;
// }

// export function DialogViewDevices({ device }: DialogViewDevicesProps) {
//   return (
//     <>
//     <Dialog>
//         <DialogTrigger asChild>
//             <Button 
//                     variant="ghost" 
//                     size="icon" 
//                     onClick={() => console.log(`Visualizar dispositivo: ${device.id}`)} 
//                     className="h-8 w-8"
//                 >
//                     <Eye className="h-4 w-4" /> 
//                 </Button>
//         </DialogTrigger>

//         <DialogContent className="w-80 h-min md:w-full md:max-w-md">
//             <DialogHeader>
//                 <DialogTitle>Visualizar Dispositivo</DialogTitle>

//                 <DialogDescription>
//                     Visualize as informações do dispositivo de monitoramento.
//                 </DialogDescription>

//             </DialogHeader>
//         <div className="space-y-6">
//         <div className="grid gap-4">

//             <div className="grid gap-3">
//                 <Label htmlFor="name">Nome</Label>
//                 <Input id="name" value={device.name} readOnly />
//                 </div>

//                 <div className="grid gap-3">
//                 <Label htmlFor="onecode">Código único (ID ESP32)</Label>
//                 <Input id="onecode" value={device.onecode} readOnly />
//                 </div>

//                 <div className="grid gap-3">
//                 <Label htmlFor="localization">Localização</Label>
//                 <Input id="localization" value={device.localization} readOnly />
//                 </div>

//                 <div className="grid gap-3">
//                 <Label htmlFor="mqtt_topic">Tópico MQTT</Label>
//                 <Input id="mqtt_topic" value={device.mqtt_topic} readOnly />
//                 </div>
//             </div>

//                 <div className="flex justify-end gap-4 pt-6">
//                     <DialogClose asChild>
//                     <Button variant="outline">Fechar</Button>
//                     </DialogClose>
//                 </div>
//         </div>
//         </DialogContent>
//     </Dialog>
//     </>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, Cpu, MapPin, Hash, Network } from "lucide-react";

interface DeviceFormValues {
  id: string;
  name: string;
  onecode: string;
  localization: string;
  mqtt_topic: string;
  status:string;
  lastUpdate:string;
}

interface DialogViewDevicesProps {
  device: DeviceFormValues;
}

export function DialogViewDevices({ device }: DialogViewDevicesProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-muted transition-colors"
          onClick={() => console.log(`Visualizar dispositivo: ${device.id}`)}
        >
          <Eye className="h-4 w-4 text-blue-600" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-lg font-semibold flex items-center gap-2">
            <Cpu className="w-5 h-5 text-primary" />
            Detalhes do Dispositivo
          </DialogTitle>
          <DialogDescription>
            Visualize as informações registradas do dispositivo.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 pt-4">
          <div className="grid gap-3">
            <Label htmlFor="name" className="flex items-center gap-1 text-sm">
              <Cpu className="w-4 h-4 text-muted-foreground" />
              Nome
            </Label>
            <Input id="name" value={device.name} readOnly className="bg-muted/30" />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="onecode" className="flex items-center gap-1 text-sm">
              <Hash className="w-4 h-4 text-muted-foreground" />
              Código único (ID ESP32)
            </Label>
            <Input id="onecode" value={device.onecode} readOnly className="bg-muted/30" />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="localization" className="flex items-center gap-1 text-sm">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              Localização
            </Label>
            <Input id="localization" value={device.localization} readOnly className="bg-muted/30" />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="mqtt_topic" className="flex items-center gap-1 text-sm">
              <Network className="w-4 h-4 text-muted-foreground" />
              Tópico MQTT
            </Label>
            <Input id="mqtt_topic" value={device.mqtt_topic} readOnly className="bg-muted/30" />
          </div>

          <div className="flex justify-between items-center pt-4">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              ID Interno: {device.id}
            </Badge>

            <DialogClose asChild>
              <Button variant="outline" size="sm" className="hover:bg-muted">
                Fechar
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}