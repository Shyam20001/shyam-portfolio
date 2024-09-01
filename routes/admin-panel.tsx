import { useEffect, useState } from 'react';
import AdminPanel from '~/components/AdminPanel.tsx';

const AdminPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const pwd = urlParams.get('uid');
        if (pwd === Deno.env.get("ADMIN_ROOT")) {
            setIsAuthenticated(true);
        }
    }, []);

    // if (!isAuthenticated) {
    //     return <div>Unauthorized access.</div>;
    // }

    return <AdminPanel />;
};

export default AdminPage;
