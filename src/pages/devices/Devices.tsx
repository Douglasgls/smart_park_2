import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DialogCreateDevice } from "./CreateDevices";
import { DialogEditDevice } from "./EditDevices";
import { DialogDeleteDevices } from "./DeleteDevices";
import { DialogViewDevices } from "./ViewDevices";

export default function Devices() {

    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Dispositivos de Monitoramento</PageHeaderHeading>
            </PageHeader>

            {/* cadastrar dispositivo/ editar */}
            <div className="py-5 md:py-10">
                <DialogCreateDevice />
            </div>


            <Table>
                <TableCaption>Lista de dispositivos</TableCaption>

                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]" colSpan={2}>Nome</TableHead>
                    <TableHead className="hidden sm:table-cell">Código</TableHead>
                    <TableHead className="hidden md:table-cell">Localização</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                    <TableHead className="hidden lg:table-cell text-right">Último envio</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                    <TableCell className="font-medium" colSpan={2}>Câmera Entrada 1</TableCell>
                    <TableCell className="hidden sm:table-cell">esp32cam_A1B2</TableCell>
                    <TableCell className="hidden md:table-cell">Bloco A - Vaga 01</TableCell>
                    <TableCell className="text-right">🟢 Online</TableCell>
                    <TableCell className="hidden lg:table-cell text-right">23/10/2025 14:25</TableCell>
                    <TableCell className="text-right">
                        <div className="flex justify-end items-center gap-2">

                            <div className="md:hidden">
                                <TooltipProvider >
                                    <Tooltip>
                                    <TooltipTrigger asChild>
                                        <DialogViewDevices
                                            device={{
                                                id: "1",
                                                name: "Câmera Entrada 1",
                                                onecode: "esp32cam_A1B2",
                                                localization: "Bloco A - Vaga 01",
                                                mqtt_topic: "cameras/vaga01"
                                            }}
                                        />
                                    </TooltipTrigger>
                                    
                                    </Tooltip>
                                </TooltipProvider>
                            </div>

                            <TooltipProvider>
                                <Tooltip>
                                <TooltipTrigger asChild>
                                    <DialogEditDevice
                                    device={{
                                        id: "1",
                                        name: "Câmera Entrada 1",
                                        onecode: "esp32cam_A1B2",
                                        localization: "Bloco A - Vaga 01",
                                        mqtt_topic: "cameras/vaga01"
                                    }}
                                    />
                                </TooltipTrigger>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                <TooltipTrigger asChild>
                                    <DialogDeleteDevices />
                                </TooltipTrigger>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}