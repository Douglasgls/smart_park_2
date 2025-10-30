import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { router } from "./Router";

export default function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

            {/* <Card className="w-full mb-4">
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

                       <Link to="/spotsDetails">
                            <Button>
                                Veja mais detalhes
                            </Button>
                        </Link>
                    </div>
                </CardHeader>
            </Card> */}