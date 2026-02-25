import { ThemeProvider } from '@/components/ThemeProvider';
import { TopAppBar } from '@/components/TopAppBar';

export function App() {
  return (
    <ThemeProvider>
      <TopAppBar />
    </ThemeProvider>
  );
}
