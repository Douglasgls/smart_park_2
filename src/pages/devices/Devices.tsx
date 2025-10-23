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
import { DialogCreateDevices } from "./CreateDevices";
import { DialogEditDevices } from "./EditDevices";
import { DialogDeleteDevices } from "./DeleteDevices";

export default function Devices() {

    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Dispositivos de Monitoramento</PageHeaderHeading>
            </PageHeader>



            {/* cadastrar dispositivo/ editar */}

            <div className="py-5 md:py-10">
                <DialogCreateDevices />
            </div>


            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>

                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                    <TableCell className="text-right">
                        <div className="flex justify-end  items-center">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <DialogEditDevices/>
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