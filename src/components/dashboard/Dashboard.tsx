import React from 'react';
import { Calendar, Clock, Users, Activity, AlertTriangle, DollarSign } from 'lucide-react';
import { DashboardMetric } from './DashboardMetric';
import { UpcomingServices } from './UpcomingServices';
import { FacilityStatus } from './FacilityStatus';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">
            <Clock className="inline-block w-4 h-4 mr-1" />
            {new Date().toLocaleDateString()}
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardMetric
          icon={<Calendar className="w-6 h-6 text-blue-600" />}
          title="Today's Services"
          value="4"
          trend="+1 from yesterday"
        />
        <DashboardMetric
          icon={<Users className="w-6 h-6 text-green-600" />}
          title="Active Cases"
          value="12"
          trend="+2 this week"
        />
        <DashboardMetric
          icon={<Activity className="w-6 h-6 text-purple-600" />}
          title="Facility Capacity"
          value="75%"
          trend="-5% from yesterday"
        />
        <DashboardMetric
          icon={<AlertTriangle className="w-6 h-6 text-yellow-600" />}
          title="Pending Tasks"
          value="8"
          trend="+3 new"
        />
        <DashboardMetric
          icon={<DollarSign className="w-6 h-6 text-emerald-600" />}
          title="Monthly Revenue"
          value="$45,250"
          trend="+12% from last month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingServices />
        <FacilityStatus />
      </div>
    </div>
  );
}