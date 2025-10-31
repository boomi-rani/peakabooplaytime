import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import AgeSelectionPage from './pages/AgeSelectionPage';
import LevelSelectionPage from './pages/LevelSelectionPage';
import Level1Page from './pages/Level1Page';
import Level2Page from './pages/Level2Page';
import Level3Page from './pages/Level3Page';
import Level4Page from './pages/Level4Page';
import Level5Page from './pages/Level5Page';
import CongratulationsScreen from './pages/CongratulationsScreen';
import Level1_Age4to5_Page from './pages/Level1_Age4to5_Page';
import Level2_Age4to5_Page from './pages/Level2_Age4to5_Page';
import Level3_Age4to5_Page from './pages/Level3_Age4to5_Page';
import Level4_Age4to5_Page from './pages/Level4_Age4to5_Page';

type Page = 'welcome' | 'ageSelection' | 'levelSelection' | 'level1' | 'level2' | 'level3' | 'level4' | 'level5' | 'level1_age4to5' | 'level2_age4to5' | 'level3_age4to5' | 'level4_age4to5';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('welcome');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string | null>(null);
  const [showCongrats, setShowCongrats] = useState(false);

  const handleStartGame = () => {
    setCurrentPage('ageSelection');
  };

  const handleBackToWelcome = () => {
    setCurrentPage('welcome');
  };
  
  const handleBackToAgeSelection = () => {
    setCurrentPage('ageSelection');
  };

  const handleBackToLevelSelection = () => {
    setCurrentPage('levelSelection');
  };

  const handleSelectAge = (ageGroup: string) => {
    setSelectedAgeGroup(ageGroup);
    setCurrentPage('levelSelection');
  };

  const handleSelectLevel = (level: number) => {
    if (selectedAgeGroup === '2–3 Years') {
      if (level === 1) setCurrentPage('level1');
      else if (level === 2) setCurrentPage('level2');
      else if (level === 3) setCurrentPage('level3');
      else if (level === 4) setCurrentPage('level4');
      else if (level === 5) setCurrentPage('level5');
    } else if (selectedAgeGroup === '4–5 Years') {
      if (level === 1) setCurrentPage('level1_age4to5');
      else if (level === 2) setCurrentPage('level2_age4to5');
      else if (level === 3) setCurrentPage('level3_age4to5');
      else if (level === 4) setCurrentPage('level4_age4to5');
      else alert(`You selected Level ${level}. The level would start now! (Other level pages are not implemented)`);
    } else {
      console.log(`Level ${level} selected for age group: ${selectedAgeGroup}`);
      alert(`You selected Level ${level}. The level would start now! (Other level pages are not implemented)`);
    }
  };

  const handleNextLevelFrom1 = () => {
    setCurrentPage('level2');
  };

  const handleNextLevelFrom2 = () => {
    setCurrentPage('level3');
  };
  
  const handleNextLevelFrom3 = () => {
    setCurrentPage('level4');
  };

  const handleNextLevelFrom4 = () => {
    setCurrentPage('level5');
  };

  const handleNextLevelFromL1A45 = () => {
      setCurrentPage('level2_age4to5');
  };
  
  const handleNextLevelFromL2A45 = () => {
      setCurrentPage('level3_age4to5');
  };

  const handleNextLevelFromL3A45 = () => {
      setCurrentPage('level4_age4to5');
  };

  const handleNextLevelFromL4A45 = () => {
    alert("Next level for 4-5 year olds is not yet implemented!");
  };

  const handleCongratulations = () => {
    setShowCongrats(true);
    setTimeout(() => {
      setShowCongrats(false);
      setCurrentPage('levelSelection');
    }, 3000);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage onStartGame={handleStartGame} />;
      case 'ageSelection':
        return (
          <AgeSelectionPage
            onBack={handleBackToWelcome}
            onSelectAge={handleSelectAge}
          />
        );
      case 'levelSelection':
        return (
          <LevelSelectionPage
            ageGroup={selectedAgeGroup!}
            onBack={handleBackToAgeSelection}
            onSelectLevel={handleSelectLevel}
          />
        );
      case 'level1':
        return (
          <Level1Page
            ageGroup={selectedAgeGroup!}
            onBack={handleBackToLevelSelection}
            onNextLevel={handleNextLevelFrom1}
          />
        );
      case 'level2':
        return (
            <Level2Page
              ageGroup={selectedAgeGroup!}
              onBack={handleBackToLevelSelection}
              onNextLevel={handleNextLevelFrom2}
            />
        );
      case 'level3':
        return (
            <Level3Page
              ageGroup={selectedAgeGroup!}
              onBack={handleBackToLevelSelection}
              onNextLevel={handleNextLevelFrom3}
            />
        );
      case 'level4':
        return (
            <Level4Page
                ageGroup={selectedAgeGroup!}
                onBack={handleBackToLevelSelection}
                onNextLevel={handleNextLevelFrom4}
            />
        );
      case 'level5':
        return (
            <Level5Page
                ageGroup={selectedAgeGroup!}
                onBack={handleBackToLevelSelection}
                onCongratulations={handleCongratulations}
            />
        );
      case 'level1_age4to5':
        return (
            <Level1_Age4to5_Page
                ageGroup={selectedAgeGroup!}
                onBack={handleBackToLevelSelection}
                onNextLevel={handleNextLevelFromL1A45}
            />
        );
      case 'level2_age4to5':
        return (
            <Level2_Age4to5_Page
                ageGroup={selectedAgeGroup!}
                onBack={handleBackToLevelSelection}
                onNextLevel={handleNextLevelFromL2A45}
            />
        );
      case 'level3_age4to5':
        return (
            <Level3_Age4to5_Page
                ageGroup={selectedAgeGroup!}
                onBack={handleBackToLevelSelection}
                onNextLevel={handleNextLevelFromL3A45}
            />
        );
      case 'level4_age4to5':
        return (
            <Level4_Age4to5_Page
                ageGroup={selectedAgeGroup!}
                onBack={handleBackToLevelSelection}
                onNextLevel={handleNextLevelFromL4A45}
            />
        );
      default:
        return <WelcomePage onStartGame={handleStartGame} />;
    }
  };

  return (
    <div className="w-screen h-screen font-sans antialiased">
      {renderPage()}
      {showCongrats && <CongratulationsScreen />}
    </div>
  );
};

export default App;