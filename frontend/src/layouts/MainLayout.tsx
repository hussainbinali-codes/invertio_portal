import { Building2, BriefcaseBusiness, ChartNoAxesCombined, IndianRupee, UsersRound, Laptop } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

const links = [
  { to: '/', label: 'Executive', icon: ChartNoAxesCombined },
  { to: '/crm', label: 'Marketing CRM', icon: Building2 },
  { to: '/projects', label: 'Developer', icon: BriefcaseBusiness },
  { to: '/finance', label: 'Finance', icon: IndianRupee },
  { to: '/hr', label: 'HR', icon: UsersRound },
  { to: '/assets', label: 'Assets', icon: Laptop }
];

export function MainLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>Invertio CRM</h1>
        {links.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.to;
          return (
            <Link key={item.to} to={item.to} className={active ? 'nav-item active' : 'nav-item'}>
              <Icon size={16} /> {item.label}
            </Link>
          );
        })}
      </aside>
      <main className="content">
        <header className="topbar">
          <input placeholder="Search projects, leads, employees..." />
          <div className="avatar">IA</div>
        </header>
        {children}
      </main>
    </div>
  );
}
