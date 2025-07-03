import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="transition-colors"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-white" /> // white icon in light mode (green navbar)
      ) : (
        <Sun className="h-5 w-5 text-yellow-300" /> // yellow sun icon in dark mode
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
