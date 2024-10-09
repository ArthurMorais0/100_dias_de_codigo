import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubProfile = ({ username }) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setProfile(response.data);
      } catch (err) {
        setError('Error fetching profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {profile && (
        <div>
          <img src={profile.avatar_url} alt={`${profile.login} avatar`} width="150" />
          <h2>{profile.name}</h2>
          <p>Username: {profile.login}</p>
          <p>Bio: {profile.bio}</p>
          <p>Public Repos: {profile.public_repos}</p>
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default GitHubProfile;
