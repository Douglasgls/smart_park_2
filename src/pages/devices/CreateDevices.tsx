// import { useState } from "react";
// import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { DeviceForm, DeviceFormValues } from "./FormDevices";
// import { toast } from "sonner";

// export function DialogCreateDevice() {
//   const [open, setOpen] = useState(false);

//   async function handleSubmit(values: DeviceFormValues) {
//     try {
//       const response = await fetch("/api/devices", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(values),
//       });

//       if (!response.ok) throw new Error("Erro ao criar dispositivo");

//       toast.success("Dispositivo criado com sucesso!");
//       setOpen(false);
//     } catch {
//       toast.error("Falha ao criar dispositivo");
//     }
//   }

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button>Adicionar dispositivo</Button>
//       </DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Cadastrar dispositivo</DialogTitle>
//         </DialogHeader>

//         <DeviceForm onSubmit={handleSubmit} />
//       </DialogContent>
//     </Dialog>
//   );
// }

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DeviceForm, DeviceFormValues } from "./FormDevices";
import { toast } from "sonner";
import { Loader2, PlusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function DialogCreateDevice() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(values: DeviceFormValues) {
    setLoading(true);
    try {
      const response = await fetch("/api/devices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Erro ao criar dispositivo");

      toast.success("✅ Dispositivo criado com sucesso!");
      setOpen(false);
    } catch (error: any) {
      toast.error(error.message || "❌ Falha ao criar dispositivo");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="inline-flex items-center gap-2 shadow-sm">
          <PlusCircle className="w-4 h-4" />
          Adicionar Dispositivo
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Cadastrar novo dispositivo
          </DialogTitle>
          <DialogDescription>
            Preencha as informações do dispositivo de monitoramento para adicioná-lo ao sistema.
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-10 text-center space-y-3"
            >
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Salvando dispositivo...</p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <DeviceForm onSubmit={handleSubmit} />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}