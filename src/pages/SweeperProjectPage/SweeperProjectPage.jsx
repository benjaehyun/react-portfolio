import React from 'react';
import ProjectTemplate from '../../components/templates/ProjectTemplate';
import { getProjectById } from '../../data/projects';

export default function SweeperDetailedPage() {
  const project = getProjectById('sweeper');

  const PersonalJourneySection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Journey Back to Minesweeper</h2>
        <p className="text-gray-300">
          My first full coding project brought me back to a game that had been a constant companion 
          throughout my academic journey - from high school to college labs.
        </p>
      </div>

      <div className="bg-gray-700/50 p-6 rounded-xl space-y-6">
        <div className="space-y-3">
          <p className="text-gray-300">
            During countless hours in chemistry, biology, and physics labs, waiting for reactions to complete 
            or a pcr gel to run, Minesweeper was often the only available entertainment on both lab 
            computers and personal laptops without internet. What started as a way to pass time evolved into an appreciation for its elegant 
            blend of logic and probability.
          </p>
          <p className="text-gray-300">
            Choosing Minesweeper as my first project wasn't just nostalgia - it was an ideal learning 
            ground. The game's clear rules and grid-based structure provided a perfect framework for 
            learning fundamental programming concepts: arrays, recursive functions, event handling, 
            and state management.
          </p>
        </div>
      </div>
    </section>
  );

  const AlgorithmEvolutionSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Search for the Perfect Algorithm</h2>
        <p className="text-gray-300">
          The journey to implement the initial reveal pattern was a fascinating exploration through 
          different algorithmic approaches, eventually leading to the discovery of flood-fill.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Early Attempts</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Coordinate-Based Clearing</h4>
              <p className="text-gray-300 text-sm">
                Initially attempted to clear cells based on known mine coordinates, calculating safe zones 
                through geometric relationships. This proved too rigid and often created unnatural patterns.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Moving Head Algorithm</h4>
              <p className="text-gray-300 text-sm">
                Tried implementing a "crawler" that would move outward from the initial click, 
                checking and clearing cells until reaching mine boundaries. This created inconsistent 
                patterns and sometimes left isolated safe cells.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Pattern Analysis</h4>
              <p className="text-gray-300 text-sm">
                Experimented with analyzing cell value patterns to predict safe zones, but this 
                approach became overly complex and couldn't guarantee intuitive reveal patterns.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">The Flood-Fill Solution</h3>
          <div className="space-y-3">
            <p className="text-gray-300">
              After extensive research, the flood-fill algorithm emerged as the perfect solution. 
              Originally used in image processing for filling connected regions, it naturally adapted 
              to our needs.
            </p>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Why It Works</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Naturally expands from a starting point</li>
                <li>• Respects boundaries (numbered cells)</li>
                <li>• Creates intuitive, connected patterns</li>
                <li>• Efficiently handles recursion</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Implementation</h4>
              <p className="text-gray-300 text-sm">
                The algorithm recursively reveals cells with zero adjacent bombs, naturally stopping at 
                numbered cells. This creates a satisfying initial reveal that is always solvable and gives players a 
                logical starting point.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const TechnicalChallengesSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Technical Challenges & Learning</h2>
        <p className="text-gray-300">
          As a first project, Sweeper provided an ideal environment to learn core web development 
          concepts and tackle complex programming challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">DOM Manipulation</h3>
          <div className="space-y-3">
            <p className="text-gray-300">
              Learning to manipulate the DOM was crucial for creating dynamic game elements and 
              updating the UI in response to player actions.
            </p>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Dynamic grid generation and rendering</li>
              <li>• Event handling for clicks</li>
              <li>• Visual state management</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">State Management</h3>
          <div className="space-y-3">
            <p className="text-gray-300">
              Managing game state without frameworks taught valuable lessons about data structure 
              design and state updates.
            </p>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Game board representation</li>
              <li>• Cell state tracking</li>
              <li>• Win/lose conditions</li>
              <li>• Timer and flag counters</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  const CoreGameplaySection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Core Gameplay Experience</h2>
        <p className="text-gray-300">
          The focus was on creating a clean, intuitive interface while maintaining the classic 
          Minesweeper experience that made the original so engaging.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Game Controls</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Left click to reveal cells</li>
            <li>• Right click to place/remove flags</li>
            <li>• Middle click for surrounding cell clears</li>
            <li>• Reset button for new games</li>
            <li>• Difficulty selection</li>
          </ul>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Visual Feedback</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Clear number colorization</li>
            <li>• Intuitive flag placement</li>
            <li>• Win/lose animations</li>
          </ul>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Game Features</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Multiple difficulty levels</li>
            <li>• First-click protection</li>
            <li>• Flag counter</li>
            <li>• Game timer</li>
          </ul>
        </div>
      </div>
    </section>
  );

  return (
    <ProjectTemplate project={project}>
      <div className="max-w-6xl mx-auto space-y-16">
        <PersonalJourneySection />
        <CoreGameplaySection />
        <AlgorithmEvolutionSection />
        <TechnicalChallengesSection />
      </div>
    </ProjectTemplate>
  );
}