function toggleDropdown(id) {
            document.querySelectorAll('.bundle-option').forEach(option => {
                option.classList.remove('active');
                option.querySelector('.dropdown-container').style.display = 'none';
            });
            
            const selectedOption = document.getElementById('dropdown' + id);
            selectedOption.style.display = 'block';
            selectedOption.parentElement.classList.add('active');
        }