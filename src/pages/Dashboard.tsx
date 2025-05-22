import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Search, Users, DatabaseIcon } from 'lucide-react';
import { getAllPatients } from '../services/DatabaseService';
import { useDatabaseContext } from '../context/DatabaseContext';

const Dashboard: React.FC = () => {
    const { isLoading, isInitialized, error } = useDatabaseContext();
    const [patientCount, setPatientCount] = useState<number>(0);

    useEffect(() => {
        const loadData = async () => {
            if (isInitialized) {
                try {
                    const patients = await getAllPatients();
                    setPatientCount(patients.length);
                } catch (err) {
                    console.error('Error loading dashboard data:', err);
                }
            }
        };

        loadData();
    }, [isInitialized]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-100 border-t-2 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-error-50 border-l-4 border-error-600 p-4 rounded-md">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-error-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-error-700">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page-transition">
            <header className="mb-8">
                <h1 className="text-3xl text-white font-extrabold text-center" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Welcome to MedBlocks, Patient Registration System.
                </h1>
                <p className="mt-2 text-center text-white text-sm">
                    Empowering Healthcare Through Smart Patient Management.
                </p>
                <p className="text-center text-white text-sm">
                    Secure, Streamlined, and Scalable – The Future of Medical Records.
                </p>
            </header>

            <div className="mb-8">
                <div className="bg-[url('/right.jpg')] bg-cover bg-center overflow-hidden shadow border border-black-200 rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                                <Users className="h-6 w-6 text-primary-600" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium font-bold text-black truncate">
                                        Total Patients
                                    </dt>
                                    <dd>
                                        <div className="text-lg font-medium text-black-900">{patientCount}</div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3 flex items-center justify-between">
                        <div className="text-sm">
                            <Link
                                to="/patients"
                                className="inline-block rounded-lg border border-primary-600 bg-primary-50 px-4 py-2 font-medium text-primary-600 hover:text-primary-500"
                            >
                                View all patients
                            </Link>
                        </div>
                        <span className="inline-flex rounded-md shadow-sm">
                            <Link
                                to="/register"
                                className="inline-flex items-center px-3 py-2 border border-black text-sm leading-4 font-medium rounded-md text-black bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                            >
                                <UserPlus className="h-4 w-4 mr-1" /> Register New
                            </Link>
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Register Patients Card */}
                <div className="bg-[url('/right.jpg')] bg-blur bg-left overflow-hidden shadow border border-black-200 rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                                <UserPlus className="h-6 w-6 text-primary-600" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <h4 className="text-sm font-medium text-black-900">Register Patients</h4>
                                <p className="mt-1 text-sm text-black-900">
                                    Add new patients
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                        <div className="text-sm">
                            <Link
                                to="/register"
                                className="font-medium text-primary-600 hover:text-primary-500"
                            >
                                <span className="inline-flex items-center space-x-1">
                                    <span>Register new patient</span>
                                    <span className="animate-arrow-move text-primary-600">→</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Query Patients Card */}
                <div className="bg-[url('/right.jpg')] bg-blur bg-left overflow-hidden shadow border border-black-200 rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-secondary-100 rounded-md p-3">
                                <Search className="h-6 w-6 text-secondary-600" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <h3 className="text-sm font-medium text-black-900">Patient Records</h3>
                                <p className="mt-1 text-sm text-black-900">
                                    Search and filter patient records
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                        <div className="text-sm">
                            <Link
                                to="/register"
                                className="font-medium text-primary-600 hover:text-primary-500"
                            >
                                <span className="inline-flex items-center space-x-1">
                                    <span>Register new patient</span>
                                    <span className="animate-arrow-move text-primary-600">→</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Database Info Card */}
                <div className="bg-[url('/right.jpg')] bg-blur bg-left overflow-hidden shadow border border-black-200 rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-accent-100 rounded-md p-3">
                                <DatabaseIcon className="h-6 w-6 text-accent-600" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <h3 className="text-sm font-medium text-blaack-900">Database Status</h3>
                                <p className="mt-1 text-sm text-black-900">
                                    Using Pglite with multi-tab support
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                        <div className="text-sm flex items-center">
                            <span className="h-2 w-2 bg-success-500 rounded-full mr-2"></span>
                            <span className="text-black-600">Database initialized successfully</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;