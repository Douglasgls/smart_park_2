import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"

export default function Dashboard() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Dashboard </PageHeaderHeading>
            </PageHeader>
            

            <h2 className="text-lg font-medium mb-4 mt-3">
                Vagas Reservadas Para Hoje
            </h2>

            <Card className="w-full mb-4">
                <CardHeader>
                    <div className="flex justify-between items-center w-full">
                        <CardTitle>
                            <div className="flex flex-col">
                                <span className="mb-1">Estacionamento 02</span> 
                                <span>Setor A</span>
                            </div>
                        </CardTitle>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger >
                                    <span 
                                        className="
                                            bg-green-500 text-white 
                                            px-4 py-2 
                                            rounded-full 
                                            text-sm font-medium 
                                            cursor-default
                                            inline-flex items-center 
                                            shadow-md
                                        "
                                    >
                                        Livre
                                    </span>
                                </TooltipTrigger>
                            </Tooltip>
                        </TooltipProvider>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <CardDescription>
                            Sem reservas ativas
                        </CardDescription>

                        <Button>
                            Veja mais detalhes
                        </Button>
                    </div>

                </CardHeader>
            </Card>

            <Card className="w-full mb-4">
                <CardHeader>
                    <div className="flex justify-between items-center w-full">
                        <CardTitle>
                            <div className="flex flex-col">
                                <span className="mb-1">Estacionamento 05</span> 
                                <span>Setor B</span>
                            </div>
                        </CardTitle>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger >
                                    <span 
                                        className="
                                            bg-orange-500 text-white 
                                            px-4 py-2 
                                            rounded-full 
                                            text-sm font-medium 
                                            cursor-default
                                            inline-flex items-center 
                                            shadow-md
                                        "
                                    >
                                        OCUPADO
                                    </span>
                                </TooltipTrigger>
                            </Tooltip>
                        </TooltipProvider>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <CardDescription>
                            20/06/2024 - 14:00 às 16:00
                        </CardDescription>

                        <Button>
                            Veja mais detalhes
                        </Button>
                    </div>
                </CardHeader>
            </Card>
        </>
    )
}
