import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { DashboardPage } from './pages/DashboardPage';
import { PipelinePage } from './pages/PipelinePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { FinancePage } from './pages/FinancePage';
import { HrPage } from './pages/HrPage';
import { AssetsPage } from './pages/AssetsPage';

export function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/crm" element={<PipelinePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/hr" element={<HrPage />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}
