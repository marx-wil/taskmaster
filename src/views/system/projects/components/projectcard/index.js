import { useNavigate } from 'react-router-dom';
import { Box, Flex, Text, Avatar, AvatarGroup, Progress, Icon, useColorModeValue } from '@chakra-ui/react';
import { FiUsers } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();
    const cardBg = useColorModeValue('#ffffff', '#0B1437');
    const contentTextColor = useColorModeValue('#0B1437', '#ffffff');
    const progressBg = useColorModeValue('rgba(128,128,128,.2)', 'rgba(128,128,128,.4)');

    return (
        <Box
            boxShadow="lg"
            p="4"
            borderRadius="lg"
            bg={cardBg}
            mb="4"
            border="1px solid"
            borderColor="rgba(128,128,128,.4)"
            cursor="pointer"
            onClick={() => navigate(`/taskmaster/project/${project.id}`)}
        >
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
                <Box>
                    <Text
                        fontSize="xl"
                        fontWeight="700"
                        color={contentTextColor}
                        mb={2}
                    >
                        {project.name}
                    </Text>
                    <Text
                        fontSize="sm"
                        color={contentTextColor}
                        opacity="0.7"
                    >
                        Last updated {project.lastUpdated}
                    </Text>
                </Box>
                <AvatarGroup size="sm" max={3}>
                    {project.members.map((member, index) => (
                        <Avatar key={index} name={member.name} src={member.avatar} />
                    ))}
                </AvatarGroup>
            </Flex>

            <Box mb={4}>
                <Flex justify="space-between" mb={2}>
                    <Text fontSize="sm" color={contentTextColor} opacity="0.7">
                        Progress
                    </Text>
                    <Text fontSize="sm" color={contentTextColor} fontWeight="600">
                        {project.progress}%
                    </Text>
                </Flex>
                <Progress
                    value={project.progress}
                    size="sm"
                    colorScheme="purple"
                    bg={progressBg}
                    borderRadius="full"
                />
            </Box>

            <Flex justify="space-between" align="center">
                <Flex align="center" gap={2}>
                    <Icon as={FiUsers} color={contentTextColor} opacity="0.7" />
                    <Text fontSize="sm" color={contentTextColor} opacity="0.7">
                        {project.members.length} members
                    </Text>
                </Flex>
                <Text fontSize="sm" color={contentTextColor} opacity="0.7">
                    Created {project.createdAt}
                </Text>
            </Flex>
        </Box>
    );
};

export default ProjectCard;
