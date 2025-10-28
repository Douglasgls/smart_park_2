"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

interface DeviceFormValues {
    id: string;
    name: string;
    onecode: string;
    localization: string;
    mqtt_topic: string;
}

interface DialogViewDevicesProps {
    device: DeviceFormValues;
}

export function DialogViewDevices({ device }: DialogViewDevicesProps) {
  return (
    <>
    <Dialog>
        <DialogTrigger asChild>
            <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => console.log(`Visualizar dispositivo: ${device.id}`)} 
                    className="h-8 w-8"
                >
                    <Eye className="h-4 w-4" /> 
                </Button>
        </DialogTrigger>

        <DialogContent className="w-80 h-min md:w-full md:max-w-md">
            <DialogHeader>
                <DialogTitle>Visualizar Dispositivo</DialogTitle>

                <DialogDescription>
                    Visualize as informações do dispositivo de monitoramento.
                </DialogDescription>

            </DialogHeader>
        <div className="space-y-6">
        <div className="grid gap-4">

            <div className="grid gap-3">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" value={device.name} readOnly />
                </div>

                <div className="grid gap-3">
                <Label htmlFor="onecode">Código único (ID ESP32)</Label>
                <Input id="onecode" value={device.onecode} readOnly />
                </div>

                <div className="grid gap-3">
                <Label htmlFor="localization">Localização</Label>
                <Input id="localization" value={device.localization} readOnly />
                </div>

                <div className="grid gap-3">
                <Label htmlFor="mqtt_topic">Tópico MQTT</Label>
                <Input id="mqtt_topic" value={device.mqtt_topic} readOnly />
                </div>
            </div>

                <div className="flex justify-end gap-4 pt-6">
                    <DialogClose asChild>
                    <Button variant="outline">Fechar</Button>
                    </DialogClose>
                </div>
        </div>
        </DialogContent>
    </Dialog>
    </>
  );
}