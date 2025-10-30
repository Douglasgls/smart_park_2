"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipTrigger, TooltipProvider, TooltipContent } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

import {
  Car,
  User,
  Phone,
  Camera,
  RefreshCw,
  ShieldAlert,
  Clock,
  MapPin,
  Activity,
} from "lucide-react";

export default function SpotsDetails() {
  const vaga = {
    name: "Vaga 05",
    sector: "Setor B",
    status: "Livre",
    lastUpdate: "14:35",
    reservation: {
      name: "João da Silva",
      time: "14:00 às 16:00",
      telphone: "(99) 99999-9999",
      plate: "ABC-1234",
    },
    sensorStatus: "Ativo",
    lastPicture: null,
  };

  const isLivre = vaga.status === "Livre";
  const statusColor = isLivre ? "bg-green-500" : "bg-red-500";

  return (
    <div className="p-6 space-y-6">
      <PageHeader>
        <PageHeaderHeading>Gerenciamento de Vaga</PageHeaderHeading>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              {vaga.name} — {vaga.sector}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium text-lg text-muted-foreground">Status Atual</h3>
              <p className="text-base mt-1 flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                Última atualização:
                <span className="font-medium">{vaga.lastUpdate}</span>
              </p>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge className={`${statusColor} text-white mt-2 px-3 py-1`}>
                      {vaga.status}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{isLivre ? "Esta vaga está livre." : "Esta vaga está ocupada."}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium text-lg text-muted-foreground">Reserva Atual</h3>

              <div className="flex justify-between py-2 items-center">
                <p className="text-base flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">{vaga.reservation.name}</span>
                </p>
                <p className="text-sm text-muted-foreground">{vaga.reservation.time}</p>
              </div>

              <div className="flex justify-between py-1 items-center">
                <p className="text-sm flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  {vaga.reservation.telphone}
                </p>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge className="bg-blue-600 text-white font-medium">
                        {vaga.reservation.plate}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Placa do veículo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium text-lg text-muted-foreground">Sensor</h3>
              <div className="flex items-center gap-2 text-sm">
                <Activity className="w-4 h-4 text-green-500" />
                <span className="font-medium">{vaga.sensorStatus}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 flex flex-col items-center justify-center shadow-md">
          <CardHeader className="text-center space-y-1">
            <CardTitle className="text-xl font-semibold flex items-center justify-center gap-2">
              <Camera className="w-5 h-5 text-muted-foreground" />
              Última Foto Enviada
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Horário: <span className="text-lg font-bold text-foreground">14:35</span>
            </p>
          </CardHeader>

          <CardContent className="flex flex-col items-center justify-center space-y-4 w-full">
            <div className="relative w-full h-72 bg-muted rounded-xl overflow-hidden flex items-center justify-center">
              {vaga.lastPicture ? (
                <img src={vaga.lastPicture} alt="Foto da vaga" className="object-cover w-full h-full" />
              ) : (
                <p className="text-muted-foreground">Sem foto disponível</p>
              )}
            </div>

            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <Button variant="default" className="min-w-[160px] flex items-center gap-2">
                <Camera className="w-4 h-4" /> Tirar Foto
              </Button>
              <Button variant="secondary" className="min-w-[160px] flex items-center gap-2">
                <RefreshCw className="w-4 h-4" /> Atualizar
              </Button>
              <Button variant="destructive" className="min-w-[160px] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> Ignorar Alerta
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}