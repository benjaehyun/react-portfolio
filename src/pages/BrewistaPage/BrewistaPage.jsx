import React, { useState } from 'react';
import ProjectTemplate from '../../components/templates/ProjectTemplate';
import DetailedMediaGallery from '../../components/ProjectDetails/DetailedMediaGallery';
import ImageModal from '../../components/ProjectDetails/ImageModal';
import { getProjectById } from '../../data/projects';

export default function BrewistaProjectPage() {
  const project = getProjectById('brewista');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const MediaShowcaseSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Visual Overview</h2>
        <p className="text-gray-300">
          User interface focusing on intuitive interactions, responsive displays, 
          and fluid transitions across all device types.
        </p>
        
        <div className="relative">
          <div className="max-w-sm mx-auto">
            <DetailedMediaGallery
              media={project.media}
              onOpenModal={handleOpenModal}
            />
          </div>
        </div>
      </div>
    </section>
  );

  const ScalingAlgorithmSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Recipe Scaling Algorithm</h2>
        <p className="text-gray-300">
          A key technical challenge was developing an time scaling system that accurately reflects the non-linear relationship between 
          increased brew volumes relative to the surface area of the brewer and the time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-blue-400 font-medium">Physical Relationships</h3>
          <div className="bg-gray-700/50 p-4 rounded-lg space-y-3">
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">Volume scales with the cube of length:</p>
              <div className="font-mono text-blue-300">V ∝ L³</div>
              <p className="text-gray-300 text-sm">Surface area scales with square of length:</p>
              <div className="font-mono text-blue-300">A ∝ L²</div>
              <p className="text-gray-300 text-sm mt-4">This mismatch led to our square root approach for cylindrical brewers, where extraction primarily depends on surface area.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-blue-400 font-medium">Conical Adaptation</h3>
          <div className="bg-gray-700/50 p-4 rounded-lg space-y-3">
            <p className="text-gray-300">For conical brewers, we adjusted for:</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Varying flow velocity at different heights</li>
              <li>• Natural increase in contact time at bottom</li>
              <li>• Non-uniform pressure distribution</li>
            </ul>
            <p className="text-gray-300 text-sm mt-4">This led to reducing the power from 0.5 to 0.35, accounting for the cone's natural flow characteristics.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-700/50 p-6 rounded-xl">
        <h3 className="text-blue-400 font-medium mb-4">Implementation</h3>
        <div className="flex flex-col md:flex-row md:items-center md:justify-around space-y-4 md:space-y-0">
          <div>
            <h4 className="text-white font-medium mb-2">Cylindrical Brewers:</h4>
            <div className="font-mono text-blue-300">t = t₀ × √S</div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Conical Brewers:</h4>
            <div className="font-mono text-blue-300">t = t₀ × S^0.35</div>
          </div>
        </div>
      </div>
    </section>
  );

  const CombinedFeaturesSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Features & Core Functionality</h2>
        <p className="text-gray-300">
          Built as a Progressive Web Application, Brewista offers comprehensive tools for coffee enthusiasts 
          to track, create, and discover brewing recipes while managing their equipment and coffee inventory.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Equipment & Inventory Management</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Equipment Tracking</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Filterable equipment dashboard</li>
                <li>• Grinder setting management</li>
                <li>• Equipment specifications</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Coffee Bean Tracking</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Dynamic filtering during recipe creation flow </li>
                <li>• Roaster</li>
                <li>• Origin</li>
                <li>• Roast Level</li>
                <li>• Processing Details</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Recipe Management</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Recipe Creation</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Ratio-based or explicit measurements</li>
                <li>• Dynamic recipe scaling</li>
                <li>• Equipment-specific parameters</li>
                <li>• Optional water temperature/flow rate tracking</li>
                <li>• Step-by-step brewing instructions</li>
                <li>• Personal notes and modifications</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Interactive Timeline</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Animated brewing steps</li>
                <li>• Expandable step instructions</li>
                <li>• Drag-and-drop step reordering</li>
                <li>• Touch-friendly mobile interface</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Community Features</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Recipe Discovery and Sharing</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Browse community recipes</li>
                <li>• Save recipes to personal collection</li>
                <li>• Fork and customize recipes</li>
                <li>• Modify recipes after each brew for necessary adjustments</li>
                <li>• Share brewing results</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Progressive Web App</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Cross-Platform Access</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Mobile-first responsive design</li>
                <li>• Desktop optimization</li>
                <li>• App-like experience</li>
                <li>• Home screen installation</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Performance Focus</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Fast initial load</li>
                <li>• Smooth transitions</li>
                <li>• Responsive interactions</li>
                <li>• Touch gesture support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const TechnicalImplementationSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Technical Implementation</h2>
        <p className="text-gray-300">
          Modern tech stack focused on performance, scalability, and real-time updates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Frontend Architecture</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">React Implementation</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Custom hooks for recipe calculations</li>
                <li>• Context API for state management</li>
                <li>• Memoization for performance</li>
                <li>• Dynamic imports for code splitting</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Animations & Interactions</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• GSAP for complex animations</li>
                <li>• React Spring for fluid interactions</li>
                <li>• Custom transition components</li>
                <li>• Optimized rendering paths</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Backend Systems</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Data Architecture</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• MongoDB with Mongoose ODM</li>
                <li>• Complex recipe relationships</li>
                <li>• Efficient query optimization</li>
                <li>• Caching strategies using local storage for a 
                  <br></br> 
                  given session's calculations</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">API Design</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• RESTful endpoints</li>
                <li>• JWT authentication</li>
                <li>• Rate limiting</li>
                <li>• Error handling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ProjectMotivationSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Project Background & Motivation</h2>
        <p className="text-gray-300">
          Brewista emerged from a personal need to streamline and enhance my daily coffee brewing process. 
          What started as a solution to my own brewing challenges has grown into a comprehensive tool 
          that I use every morning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Previous Challenges</h3>
          <div className="space-y-3 text-gray-300">
            <p>
              Manually tracking coffee brewing techniques in a physical notebook presented several challenges:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Recipe scaling calculations were imprecise, especially for brew times</li>
              <li>• A new bag of coffee meant starting the dialing-in process from scratch</li>
              <li>• Difficult to reference past dialed-in recipes with similar beans</li>
              <li>• Finding recipes, calculating, and timing recipes by hand is an arduous task first thing in the morning</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Solution Benefits</h3>
          <div className="space-y-3 text-gray-300">
            <p>
              The application addresses these issues with a unified interface that provides:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Precise recipe scaling with accurate brew time calculations</li>
              <li>• Quick access to similar recipes</li>
              <li>• Flexible recipe creation and calculations based on target coffee or water amounts</li>
              <li>• Easy tracking of modifications and improvements</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4 md:col-span-2">
          <h3 className="text-lg font-semibold text-white">Personal Impact</h3>
          <div className="space-y-3 text-gray-300">
            <p>
              Developing this app has left a significant impact on my daily coffee brewing routine. Early morning 
              brewing decisions are now streamlined - whether I'm trying a new bean or scaling a recipe 
              to a different volume, the application handles the calculations and provides clear 
              instructions. The ability to map techniques between similar beans has also reduced the 
              time spent dialing in new coffees, leading to more consistent and enjoyable results.
            </p>
            <p>
              What started as a solution to personal brewing challenges has evolved into a 
              comprehensive tool that makes specialty coffee brewing more accessible and consistent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const CurrentWork = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">What I'm Working On Now</h2>
        <p className="text-gray-300">
          As something that I use everyday, I constantly have new ideas and visions for this app's abilities
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4 md:col-span-2">
          <h3 className="text-lg font-semibold text-white">Recipe Versioning</h3>
          <div className="space-y-3 text-gray-300">
            <ul className="space-y-2 text-sm">
                <li>• Current structure for app only allows for destructive changes to recipes without creating a new copy</li>
                <li>• Tracks all saved changes in a new recipe versioning system</li>
                <li>• Whether it be a previous iteration of a technique or coffee bean/gear used before, past recipes can be used and modified</li>
                <li>• Includes major (X.0) versions and minor (X.Y) versions for a fully scoped view of version history</li>
                <li>• Also introduces changes for recipe branching (if you were to copy a recipe from someone else and make edits), maintaining parent recipe connection</li>
                <li>• Makes recipe system more concise as you won't have to save new copies for new configurations or recipe adjustments </li>
                </ul>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <ProjectTemplate project={project}>
      <div className="max-w-6xl mx-auto space-y-16">
        <MediaShowcaseSection />
        <CurrentWork /> 
        <ProjectMotivationSection /> 
        <CombinedFeaturesSection />
        <ScalingAlgorithmSection />
        <TechnicalImplementationSection />
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          media={project.media}
          initialImage={selectedImage}
        />
      </div>
    </ProjectTemplate>
  );
}