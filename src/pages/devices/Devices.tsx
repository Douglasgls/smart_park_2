import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Devices() {

    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Dispositivos de Monitoramento</PageHeaderHeading>
            </PageHeader>



            {/* cadastrar dispositivo/ editar */}



            {/* listar dispositivos */}

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
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            onClick={() => console.log('Editar fatura INV001')} 
                                            className="h-8 w-8"
                                        >
                                            <Pencil className="h-4 w-4" /> 
                                        </Button>
                                    </TooltipTrigger>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            onClick={() => console.log('Editar fatura INV001')} 
                                            className="h-8 w-8"
                                        >
                                            <Trash className="h-4 w-4" /> 
                                        </Button>
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