// Save data to local storage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  // Load data from local storage
  function loadFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

// Update data in local storage
function updateLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
// Delete data from local storage
function deleteFromLocalStorage(key) {
    localStorage.removeItem(key);
}

function clearLocalStorage() {
    localStorage.clear();
  }

  export {saveToLocalStorage,
         loadFromLocalStorage,
         updateLocalStorage,
         deleteFromLocalStorage,
         clearLocalStorage,}