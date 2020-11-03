// Enter your JavaScript for the solution here...

const searchInput = document.getElementById('filter');
const rows = document.querySelectorAll('.thumb-display');

	searchInput.addEventListener('keyup', function(evt) {
	const q = event.target.value.toLowerCase();
	rows.forEach((row) =>{
	console.log(row);
	row.querySelector('p').textContent.toLowerCase().includes(q)
	 ? (row.style.display = "") 
	 : (row.style.display = "none");
	});
});