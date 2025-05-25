
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';

const DarkModeToggle: React.FC = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4 text-yellow-500" />
      <Switch
        checked={isDark}
        onCheckedChange={toggleDarkMode}
        className="data-[state=checked]:bg-slate-700 data-[state=unchecked]:bg-slate-200"
      />
      <Moon className="h-4 w-4 text-blue-500" />
    </div>
  );
};

export default DarkModeToggle;
