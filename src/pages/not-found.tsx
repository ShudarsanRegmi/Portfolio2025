import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-none">
          <CardContent className="pt-8 pb-10 text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-10 w-10 text-red-500" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">404 — Page Not Found</h1>
            <p className="text-gray-600 text-sm">
              Looks like this page doesn’t exist. Maybe it's lost in the void.
            </p>

            <Button
              className="mt-6 bg-black text-white hover:bg-gray-900 transition-colors"
              onClick={() => setLocation("/")}
            >
              Take me home
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
