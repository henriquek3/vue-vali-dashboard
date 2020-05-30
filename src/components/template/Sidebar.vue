<template>
    <aside class="app-sidebar">
        <div class="app-sidebar__user">
            <img alt="User Image"
                 class="app-sidebar__user-avatar"
                 src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg">
            <div>
                <p class="app-sidebar__user-name">John Doe</p>
                <p class="app-sidebar__user-designation">Frontend Developer</p>
            </div>
        </div>
        <ul class="app-menu">
            <li>
                <router-link class="app-menu__item" exact-active-class="active" to="/dashboard">
                    <i class="app-menu__icon fas fa-tachometer-alt"></i>
                    <span class="app-menu__label">Dashboard</span>
                </router-link>
            </li>
            <li class="treeview" id="ui-elements">
                <a class="app-menu__item" data-toggle="treeview" href="#"><i
                        class="app-menu__icon fa fa-laptop"></i><span class="app-menu__label">UI Elements</span><i
                        class="treeview-indicator fa fa-angle-right"></i></a>
                <ul class="treeview-menu">
                    <li><a class="treeview-item" href="bootstrap-components"><i class="icon far fa-circle"></i>
                        Bootstrap Elements</a></li>
                    <li><a class="treeview-item" href="https://fontawesome.com/v4.7.0/icons/" rel="noopener"
                           target="_blank"><i class="icon far fa-circle"></i>
                        Font Icons</a></li>
                    <li><a class="treeview-item" href="ui-cards"><i class="icon far fa-circle"></i> Cards</a></li>
                    <li><a class="treeview-item" href="widgets"><i class="icon far fa-circle"></i> Widgets</a></li>
                </ul>
            </li>
            <li><a class="app-menu__item" href="charts"><i class="app-menu__icon fas fa-chart-pie"></i><span
                    class="app-menu__label">Charts</span></a></li>
            <li class="treeview">
                <a class="app-menu__item" data-toggle="treeview" href="#">
                    <i class="app-menu__icon fa fa-edit"></i>
                    <span class="app-menu__label">Forms</span>
                    <i class="treeview-indicator fa fa-angle-right"></i>
                </a>
                <ul class="treeview-menu">
                    <li><a class="treeview-item" href="form-components"><i class="icon far fa-circle"></i> Form
                        Components</a></li>
                    <li><a class="treeview-item" href="form-custom"><i class="icon far fa-circle"></i> Custom
                        Components</a></li>
                    <li><a class="treeview-item" href="form-samples"><i class="icon far fa-circle"></i> Form
                        Samples</a></li>
                    <li><a class="treeview-item" href="form-notifications"><i class="icon far fa-circle"></i> Form
                        Notifications</a></li>
                </ul>
            </li>
            <li class="treeview"><a class="app-menu__item" data-toggle="treeview" href="#"><i
                    class="app-menu__icon fa fa-th-list"></i><span
                    class="app-menu__label">Tables</span><i class="treeview-indicator fa fa-angle-right"></i></a>
                <ul class="treeview-menu">
                    <li><a class="treeview-item" href="table-basic"><i class="icon far fa-circle"></i> Basic
                        Tables</a></li>
                    <li><a class="treeview-item" href="table-data-table"><i class="icon far fa-circle"></i> Data
                        Tables</a></li>
                </ul>
            </li>
            <li class="treeview"> <!-- :class="{'is-expanded': this.$route.path.split('/')[1] === 'cadastro'}"> -->
                <a class="app-menu__item" data-toggle="treeview" href="#">
                    <i class="app-menu__icon fas fa-file"></i>
                    <span class="app-menu__label">Pages</span>
                    <i class="treeview-indicator fa fa-angle-right"></i>
                </a>
                <ul class="treeview-menu">
                    <li>
                        <router-link class="treeview-item" exact-active-class="active" to="/cadastro/blank-page">
                            <i class="icon far fa-circle"></i> Blank Page
                        </router-link>
                    </li>
                    <li><a class="treeview-item" href="page-login"><i class="icon far fa-circle"></i> Login Page</a>
                    </li>
                    <li><a class="treeview-item" href="page-lockscreen"><i class="icon far fa-circle"></i> Lockscreen
                        Page</a></li>
                    <li><a class="treeview-item" href="page-user"><i class="icon far fa-circle"></i> User Page</a>
                    </li>
                    <li><a class="treeview-item" href="page-invoice"><i class="icon far fa-circle"></i> Invoice
                        Page</a></li>
                    <li><a class="treeview-item" href="page-calendar"><i class="icon far fa-circle"></i> Calendar
                        Page</a>
                    </li>
                    <li><a class="treeview-item" href="page-mailbox"><i class="icon far fa-circle"></i> Mailbox</a>
                    </li>
                    <li><a class="treeview-item" href="page-error"><i class="icon far fa-circle"></i> Error Page</a>
                    </li>
                </ul>
            </li>
            <li><a class="app-menu__item" href="docs"><i class="app-menu__icon fas fa-file-alt"></i><span
                    class="app-menu__label">Docs</span></a></li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "Sidebar",
    }
</script>

<style scoped>

</style>