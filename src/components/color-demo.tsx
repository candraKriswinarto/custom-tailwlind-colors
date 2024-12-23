import { ArrowRight, ArrowUp, Clock, Users } from "lucide-react";

export default function ColorDemo() {
  return (
    <div className="w-full max-w-6xl p-6 space-y-8 mx-auto">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Customers Card */}
        <div className="bg-gradient-to-br from-brand-100 to-brand-600 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
            <div className="w-full h-full bg-brand-300 opacity-20 rounded-full"></div>
          </div>

          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white/90 backdrop-blur p-2 rounded-lg">
              <Users className="w-5 h-5 text-brand-500" />
            </div>
            <h3 className="text-brand-700 text-sm font-medium">
              Active Customers
            </h3>
          </div>

          <div className="flex items-end space-x-3 mb-2">
            <span className="text-4xl font-bold text-brand-800">1,553</span>
            <div className="flex items-center text-brand-600 bg-white/50 backdrop-blur px-2 py-1 rounded-full text-sm">
              <ArrowUp className="w-3 h-3 mr-1" />
              <span>12.3%</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <div className="flex-1">
              <div className="h-2 bg-brand-300/30 rounded-full">
                <div className="h-2 bg-brand-500 rounded-full w-3/4"></div>
              </div>
              <p className="text-brand-600 text-sm mt-2">Monthly Target: 75%</p>
            </div>
            <div className="flex items-center text-brand-700 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>Last 30 days</span>
            </div>
          </div>
        </div>

        {/* Schedule Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-gray-600 text-sm font-medium mb-4">
            Today's Schedule
          </h3>
          <div className="space-y-3">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="text-brand-800 font-medium">Team Meeting</span>
                <span className="text-brand-600 text-sm">9:00 AM</span>
              </div>
            </div>
            <div className="bg-secondary-50 border border-secondary-100 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="text-secondary-800 font-medium">
                  Design Review
                </span>
                <span className="text-secondary-600 text-sm">2:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((post) => (
          <div key={post} className="group">
            <div className="aspect-video bg-brand-100 rounded-lg mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-brand-100 to-brand-300"></div>
            </div>
            <div className="space-y-2">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-brand-100 text-brand-700 rounded">
                Design
              </span>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-brand-600">
                Creating a Consistent Brand Experience
              </h3>
              <p className="text-gray-600 text-sm">
                Learn how to maintain brand consistency across different
                platforms and mediums.
              </p>
              <button className="flex items-center text-brand-500 hover:text-brand-600 text-sm font-medium">
                Read more <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
