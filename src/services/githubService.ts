import { GitHubFollowers } from "@/types/GitHub";

export const fetchGitHubFollowerss = async (
  user: string
): Promise<GitHubFollowers[]> => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${user}/followers`
    );

    if (!response.ok) {
      console.error("Error fetching followers:", response.statusText);
      return [];
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching followers:", error);
    return [];
  }
};

export const fetchUserDetails = async (user: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}`);

    if (!response.ok) {
      console.error("Error fetching user details:", response.statusText);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return null;
  }
};
