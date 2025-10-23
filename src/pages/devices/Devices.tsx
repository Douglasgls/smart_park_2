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
                    <TableHead>Código</TableHead>
                    <TableHead>Localização</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                    <TableHead className="text-right">Última envio</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                    <TableCell className="font-medium" colSpan={2}>Câmera Entrada 1</TableCell>
                    <TableCell>esp32cam_A1B2</TableCell>
                    <TableCell>Bloco A - Vaga 01</TableCell>
                    <TableCell className="text-right">🟢 Online</TableCell>
                    <TableCell className="text-right">23/10/2025 14:25</TableCell>
                    {/* acoes */}
                    <TableCell className="text-right">
                        <div className="flex justify-end  items-center">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <DialogEditDevice device={{ id: "1", name: "Câmera Entrada 1", onecode: "esp32cam_A1B2", localization: "Bloco A - Vaga 01", mqtt_topic: "cameras/vaga01" }} />
                                    </TooltipTrigger>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <DialogDeleteDevices/>
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