import React from 'react';
import Navbar from '../componentes/Navbar';
import SidebarMenu from '../componentes/SidebarMenu';
import ContentHeader from '../componentes/ContentHeader';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    return (
        <>
            <Navbar></Navbar>
            <SidebarMenu></SidebarMenu>

            <main id="main" className="main">
                <ContentHeader
                    titulo={"DashBoard"}
                    breadCrumb1={"DashBoard"}
                    breadCrumb2={""}
                    breadCrumb3={""}
                    ruta={"/menu-principal"}
                />

                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card">
                                        <Link to={"/roles-admin"} >
                                            <div className="card-body">
                                                <h5 className="card-title">Roles</h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-people" />
                                                    </div>
                                                    <div className="ps-3">

                                                        <span className="text-success big pt-1 fw-bold">IR</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card">
                                        <Link to={"/especialidades-admin"} >
                                            <div className="card-body">
                                                <h5 className="card-title">Especialidades</h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-hospital" />
                                                    </div>
                                                    <div className="ps-3">

                                                        <span className="text-success big pt-1 fw-bold">IR</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card">
                                        <Link to={"/usuarios-admin"} >
                                            <div className="card-body">
                                                <h5 className="card-title">Usuarios</h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-person-plus-fill" />
                                                    </div>
                                                    <div className="ps-3">

                                                        <span className="text-success big pt-1 fw-bold">IR</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card">
                                        <Link to={"/agenda-citas-admin"} >
                                            <div className="card-body">
                                                <h5 className="card-title">Agenda Citas</h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-journal-medical" />
                                                    </div>
                                                    <div className="ps-3">

                                                        <span className="text-success big pt-1 fw-bold">IR</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default DashBoard;