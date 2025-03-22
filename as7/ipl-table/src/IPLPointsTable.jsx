import React, { useEffect, useState } from "react";

const IPLPointsTable = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        let data = await response.json();
        
        // Sorting teams based on NRR (Net Run Rate) in ascending order
        data.sort((a, b) => a.NRR - b.NRR);
        
        setTeams(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex justify-center mt-10">
      <table className="border-collapse border border-gray-400 w-3/4 text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">Rank</th>
            <th className="border border-gray-400 p-2">Team</th>
            <th className="border border-gray-400 p-2">Matches</th>
            <th className="border border-gray-400 p-2">Won</th>
            <th className="border border-gray-400 p-2">Lost</th>
            <th className="border border-gray-400 p-2">Tied</th>
            <th className="border border-gray-400 p-2">NRR</th>
            <th className="border border-gray-400 p-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id} className="border border-gray-400">
              <td className="border border-gray-400 p-2">{index + 1}</td>
              <td className="border border-gray-400 p-2">{team.Team}</td>
              <td className="border border-gray-400 p-2">{team.Matches}</td>
              <td className="border border-gray-400 p-2">{team.Won}</td>
              <td className="border border-gray-400 p-2">{team.Lost}</td>
              <td className="border border-gray-400 p-2">{team.Tied}</td>
              <td className="border border-gray-400 p-2">{team.NRR.toFixed(2)}</td>
              <td className="border border-gray-400 p-2">{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPLPointsTable;
