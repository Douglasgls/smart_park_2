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

import { DialogCreateClients } from "./CreateClients";
import { DialogEditClient } from "./EditClients";
import { DialogDeleteClients } from "./DeleteClient";
import { DialogViewClients } from "./ViewClients";

export default function Devices() {

    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Gerencimento de Clientes</PageHeaderHeading>
            </PageHeader>

            {/* cadastrar Cliente editar */}
            <div className="py-5 md:py-10">
                <DialogCreateClients />
            </div>


            <Table>
                <TableCaption>Lista de clientes</TableCaption>

                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Nome</TableHead>
                    <TableHead className="text-right">Placa</TableHead>
                    <TableHead className="hidden md:table-cell">Telefone</TableHead>
                    <TableHead className="hidden lg:table-cell">Email</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                    <TableCell className="font-medium">João da Silva</TableCell>
                    <TableCell className="text-right">ABC1234</TableCell>
                    <TableCell className="hidden md:table-cell">81 99999-0000</TableCell>
                    <TableCell className="hidden lg:table-cell">joao@example.com</TableCell>
                    <TableCell className="text-right">🟢 Online</TableCell>
                    <TableCell className="text-right">
                        <div className="flex gap-2 items-center justify-end">

                            <div className="lg:hidden">
                            <TooltipProvider>
                                <Tooltip>
                                <TooltipTrigger asChild>
                                    <DialogViewClients 
                                        client={{
                                            id: '1',
                                            name: 'João da Silva',
                                            plate: 'ABC1234',
                                            telephone: '81 99999-0000',
                                            email: 'joao@example.com',
                                        }}
                                    />
                                </TooltipTrigger>
                                </Tooltip>
                            </TooltipProvider>
                        </div>

                        <TooltipProvider>
                            <Tooltip>
                            <TooltipTrigger asChild>
                                <DialogEditClient
                                client={{
                                    id: '1',
                                    name: 'João da Silva',
                                    plate: 'ABC1234',
                                    telephone: '81 99999-0000',
                                    email: 'joao@example.com',
                                }}
                                />
                            </TooltipTrigger>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                            <TooltipTrigger asChild>
                                <DialogDeleteClients clientId="1" />
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