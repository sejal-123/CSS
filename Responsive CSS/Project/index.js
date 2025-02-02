var isSidebarExpanded = false;

function toggleSideBar() {
    isSidebarExpanded = !isSidebarExpanded;
    const sidebar = document.getElementsByClassName('sidebar')[0];
    if (isSidebarExpanded) {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
    
}