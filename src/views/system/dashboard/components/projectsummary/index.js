import StatsCard from '../../../../../components/statscard';
import { FiFolder } from 'react-icons/fi';

const ProjectSummary = () => {
  const userData = {
    activeProjects: 5,
  };
  return (
    <>
      <StatsCard
        header="Projects Summary"
        main={userData.activeProjects}
        icon={FiFolder}
        footer="Active Projects"
      />
    </>
  );
};

export default ProjectSummary;
