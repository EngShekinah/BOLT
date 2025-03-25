import React, { useState } from 'react';
import { Calendar, Users, Clock, DollarSign, Plus, Edit, Trash } from 'lucide-react';

export function ServiceManagement() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Traditional Funeral Service",
      description: "Complete funeral service with viewing and ceremony",
      price: "$5,500",
      duration: "2-3 days",
      features: [
        "Professional services",
        "Embalming and preparation",
        "Use of facilities",
        "Transportation services",
        "Memorial package"
      ]
    },
    {
      id: 2,
      name: "Cremation Service",
      description: "Direct cremation with memorial service",
      price: "$3,200",
      duration: "1-2 days",
      features: [
        "Cremation process",
        "Memorial service",
        "Urn selection",
        "Death certificates",
        "Online obituary"
      ]
    },
    {
      id: 3,
      name: "Memorial Service",
      description: "Celebration of life ceremony",
      price: "$2,800",
      duration: "1 day",
      features: [
        "Memorial ceremony",
        "Facility rental",
        "Memorial cards",
        "Guest book",
        "Photo display"
      ]
    },
    {
      id: 4,
      name: "Graveside Service",
      description: "Simple graveside ceremony",
      price: "$4,200",
      duration: "1 day",
      features: [
        "Professional services",
        "Transportation",
        "Grave setup",
        "Basic casket",
        "Cemetery coordination"
      ]
    }
  ]);

  const [editingService, setEditingService] = useState(null);
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    features: []
  });

  const handleAddService = () => {
    const id = services.length + 1;
    setServices([...services, { ...newService, id }]);
    setNewService({ name: '', description: '', price: '', duration: '', features: [] });
  };

  const handleEditService = (service) => {
    setEditingService(service);
  };

  const handleUpdateService = () => {
    setServices(services.map(service => service.id === editingService.id ? editingService : service));
    setEditingService(null);
  };

  const handleDeleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">Service Packages</h1>
        <p className="mt-2 text-gray-600">Choose from our range of dignified service options</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02]">
            <div className="p-6 bg-gradient-to-r from-primary-600 to-secondary-600">
              <h3 className="text-xl font-semibold text-white">{service.name}</h3>
              <p className="mt-2 text-primary-100">{service.description}</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center text-gray-900 font-semibold">
                  <DollarSign className="w-5 h-5 mr-1" />
                  <span>{service.price}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-2">
                <button onClick={() => handleEditService(service)} className="p-2 text-gray-600 hover:text-gray-900">
                  <Edit className="w-5 h-5" />
                </button>
                <button onClick={() => handleDeleteService(service.id)} className="p-2 text-gray-600 hover:text-gray-900">
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900">Add New Service</h2>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Service Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              value={newService.name}
              onChange={(e) => setNewService({ ...newService, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              value={newService.price}
              onChange={(e) => setNewService({ ...newService, price: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Duration</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              value={newService.duration}
              onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Features</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              value={newService.features.join(', ')}
              onChange={(e) => setNewService({ ...newService, features: e.target.value.split(', ') })}
            />
          </div>
          <button onClick={handleAddService} className="w-full mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            Add Service
          </button>
        </div>
      </div>

      {editingService && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900">Edit Service</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Service Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={editingService.name}
                onChange={(e) => setEditingService({ ...editingService, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={editingService.description}
                onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={editingService.price}
                onChange={(e) => setEditingService({ ...editingService, price: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Duration</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={editingService.duration}
                onChange={(e) => setEditingService({ ...editingService, duration: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Features</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={editingService.features.join(', ')}
                onChange={(e) => setEditingService({ ...editingService, features: e.target.value.split(', ') })}
              />
            </div>
            <button onClick={handleUpdateService} className="w-full mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Update Service
            </button>
          </div>
        </div>
      )}
    </div>
  );
}