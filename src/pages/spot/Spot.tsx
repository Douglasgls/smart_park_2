"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";

import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"


export default function Spots() {
  return (
    <div className="p-6 space-y-6">
      <PageHeader>
        <PageHeaderHeading>Gerenciamento de Vaga</PageHeaderHeading>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Vaga 05 — Setor B
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium text-lg text-muted-foreground">Status Atual</h3>
              <p className="text-md mt-1">Último envio: <span className="font-medium">14:35</span></p>


              <p className="text-md py-2">Estado: 
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger >
                            <span 
                                className="
                                    bg-green-500 text-white 
                                    px-6  
                                    rounded-full 
                                    text-sm font-medium 
                                    cursor-default
                                    inline-flex items-center 
                                    shadow-md ml-2
                                "
                            >
                                Livre
                            </span>
                        </TooltipTrigger>
                    </Tooltip>
                </TooltipProvider>
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium text-lg text-muted-foreground">Reserva Atual</h3>

                <div className="flex justify-between py-2">
                    <p className="text-md">Nome: <span className="font-medium">João da Silva</span></p>
                    <p className="text-md text-gray-200">14:00 às 16:00</p>
                </div>

              <p className="text-sm mt-1">Telefone: <span className="font-medium">(99) 99999-9999</span></p>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 flex flex-col items-center justify-center shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-center">Última Foto Enviada</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <div className="relative w-full h-64 bg-muted rounded-xl overflow-hidden flex items-center justify-center">
              <p>Sem foto</p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <Button variant="default" className="min-w-[150px]">Tirar Foto</Button>
              <Button variant="secondary" className="min-w-[150px]">Atualizar</Button>
              <Button variant="destructive" className="min-w-[150px]">Ignorar Alerta</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}