    const apiKey = '8414|F3xWXX3hXBwChh8MXiZIWQHgm6quS55Tdoeyy6xH';
    const apiUrl = 'https://zylalabs.com/api/5957/basketball+real+time+match+api/7896/match+live';

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-zyla-key': apiKey
      }
    })
      .then(response => response.json())
      .then(data => {
        const matchList = document.getElementById('match-list');
        matchList.innerHTML = '';

        data.response.forEach(match => {
          const homeTeam = match.teams.home.name;
          const awayTeam = match.teams.away.name;
          const matchDate = new Date(match.date);
          const listItem = document.createElement('li');
          listItem.className = 'bg-white p-4 rounded shadow';
          listItem.innerHTML = `<div class="flex justify-between items-center">
              <span class="font-semibold text-gray-800">${homeTeam}</span>
              <span class="text-gray-500">vs</span>
              <span class="font-semibold text-gray-800">${awayTeam}</span>
            </div>
            <div class="text-center text-sm text-gray-600 mt-2">
              ${matchDate.toLocaleString()}
            </div>`;
          matchList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error fetching match data:', error);
        const matchList = document.getElementById('match-list');
        matchList.innerHTML = '<li class="text-center text-red-500">Failed to load matches.</li>';
      });