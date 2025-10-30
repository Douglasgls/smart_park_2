import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"; // Adicionado TooltipContent
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

interface Client {
    id: string;
    name: string;
    plate: string;
    cpf: string;
    telephone: string;
    email: string;
}

export default function Clients() {

    const clients: Client[] = [
        {
            id: '1',
            name: 'João da Silva',
            plate: 'ABC1234',
            cpf: '123.456.789-00',
            telephone: '81 99999-0000',
            email: 'joao@example.com',
        },
        {
            id: '2',
            name: 'Maria Oliveira',
            plate: 'XYZ9876',
            cpf: '987.654.321-11',
            telephone: '11 88888-7777',
            email: 'maria@example.com',
        },
    ];

    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Gerenciamento de Clientes</PageHeaderHeading>
            </PageHeader>

            <div className="flex justify-between items-center py-6">
                <DialogCreateClients />
            </div>
            <div className="rounded-md border shadow-sm overflow-hidden"> 
                <Table>
                    <TableCaption>Lista de clientes cadastrados no sistema.</TableCaption>

                    <TableHeader>
                        <TableRow className="bg-muted/30"> 
                        <TableHead className="w-[160px]">Nome</TableHead> 
                        <TableHead className="text-center hidden sm:table-cell">Placa</TableHead>
                        <TableHead className="text-center hidden md:table-cell">CPF</TableHead>
                        <TableHead className="text-center hidden lg:table-cell">Telefone</TableHead>
                        <TableHead className="text-center hidden lg:table-cell">Email</TableHead>
                        <TableHead className="text-center">Ações</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {clients.map((client) => ( 
                            <TableRow 
                                key={client.id}
                                className="hover:bg-muted/20 transition-colors cursor-pointer" 
                            >
                                <TableCell className="font-medium">{client.name}</TableCell>
                                <TableCell className="text-center hidden sm:table-cell text-muted-foreground">{client.plate}</TableCell>
                                <TableCell className="text-center hidden md:table-cell text-muted-foreground">{client.cpf}</TableCell>
                                <TableCell className="text-center hidden lg:table-cell text-muted-foreground">{client.telephone}</TableCell>
                                <TableCell className="text-center hidden lg:table-cell text-muted-foreground">{client.email}</TableCell>
                                <TableCell className="text-center">
                                    <div className="flex justify-center items-center gap-2">
                                        
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <DialogViewClients client={client} />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Visualizar detalhes</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>

                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <DialogEditClient client={client} />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Editar cliente</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>

                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <DialogDeleteClients clientId={client.id} />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Excluir cliente</p>
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
    )
}