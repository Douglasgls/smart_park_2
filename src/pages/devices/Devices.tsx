import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DialogCreateDevice } from "./CreateDevices";
import { DialogEditDevice } from "./EditDevices";
import { DialogDeleteDevices } from "./DeleteDevices";
import { DialogViewDevices } from "./ViewDevices";

import { Badge } from "@/components/ui/badge";
import { Circle, Power, WifiOff } from "lucide-react";


export default function Devices() {
  const devices = [
    {
      id: "1",
      name: "Câmera Entrada 1",
      onecode: "esp32cam_A1B2",
      localization: "Bloco A - Vaga 01",
      mqtt_topic: "cameras/vaga01",
      status: "online",
      lastUpdate: "23/10/2025 14:25",
    },
    {
      id: "2",
      name: "Câmera Saída 2",
      onecode: "esp32cam_C3D4",
      localization: "Bloco B - Saída Principal",
      mqtt_topic: "cameras/saida02",
      status: "offline",
      lastUpdate: "23/10/2025 13:40",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "online":
        return (
          <Badge className="bg-green-500/90 text-white inline-flex items-center gap-1">
            <Power className="w-4 h-4" /> Online
          </Badge>
        );
      case "offline":
        return (
          <Badge className="bg-red-500/90 text-white inline-flex items-center gap-1">
            <WifiOff className="w-4 h-4" /> Offline
          </Badge>
        );
      default:
        return (
          <Badge className="bg-amber-500/90 text-white inline-flex items-center gap-1">
            <Circle className="w-4 h-4" /> Desconhecido
          </Badge>
        );
    }
  };

  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Dispositivos de Monitoramento</PageHeaderHeading>
      </PageHeader>

      <div className="flex justify-between items-center py-6">
        <DialogCreateDevice />
      </div>

      <div className="rounded-md border shadow-sm overflow-hidden">
        <Table>
          <TableCaption>Lista de dispositivos conectados ao sistema.</TableCaption>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="w-[160px]">Nome</TableHead>
              <TableHead className="hidden sm:table-cell">Código</TableHead>
              <TableHead className="hidden md:table-cell">Localização</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="hidden lg:table-cell text-center">Último envio</TableHead>
              <TableHead className="text-center">Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {devices.map((device) => (
              <TableRow
                key={device.id}
                className="hover:bg-muted/20 transition-colors cursor-pointer"
              >
                <TableCell className="font-medium">{device.name}</TableCell>
                <TableCell className="hidden sm:table-cell text-muted-foreground">
                  {device.onecode}
                </TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">
                  {device.localization}
                </TableCell>
                <TableCell className="text-center">{getStatusBadge(device.status)}</TableCell>
                <TableCell className="hidden lg:table-cell text-center text-muted-foreground">
                  {device.lastUpdate}
                </TableCell>

                <TableCell className="text-center">
                  <div className="flex justify-center items-center gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <DialogViewDevices device={device} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Visualizar detalhes</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <DialogEditDevice device={device}/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Editar dispositivo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <DialogDeleteDevices/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Excluir dispositivo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}