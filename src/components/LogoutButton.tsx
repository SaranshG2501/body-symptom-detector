
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const LogoutButton = () => {
  const { logout } = useAuth();
  const isMobile = useIsMobile();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <Button
      variant="outline"
      size={isMobile ? "icon" : "sm"}
      onClick={handleLogout}
      className="flex items-center justify-center text-gray-800 hover:text-black border-gray-300 hover:bg-gray-200 transition-colors"
      aria-label="Logout"
    >
      <LogOut className="h-4 w-4" />
      {!isMobile ? <span className="ml-2 hidden sm:inline">Logout</span> : null}
    </Button>
  );
};

export default LogoutButton;
