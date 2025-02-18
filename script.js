// Simulating the bypass process

document.getElementById('bypass-button').addEventListener('click', function() {
    const inputKey = document.getElementById('input-key').value;
    const notification = document.getElementById('notification');
    const progressBar = document.getElementById('progress-bar');

    if (inputKey === '') {
        notification.textContent = 'Please enter a valid key!';
        notification.style.backgroundColor = 'red';
        notification.style.display = 'block';
        return;
    }

    notification.style.display = 'none'; // Hide notification if key is provided

    // Simulate progress
    simulateProgress();

    // Simulating bypassing process (URL redirection)
    setTimeout(function() {
        // Simulating a successful bypass and redirect
        notification.textContent = 'Bypass Successful! Redirecting...';
        notification.style.backgroundColor = 'green';
        notification.style.display = 'block';
        
        // Simulating URL redirection (replace with actual redirect in real use case)
        setTimeout(function() {
            window.location.href = 'https://spdmteam.com/api/keysystem?step=1&advertiser=lootlabs&OS=ios'; // Example API redirect
        }, 1500); // Delay before redirect
    }, 5000); // Simulate time delay (5 seconds)
});

function simulateProgress() {
    let progress = 0;
    const progressBar = document.getElementById('progress-bar');

    const interval = setInterval(function() {
        progress += 10;
        progressBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 500); // Increase progress every 0.5 second
}
