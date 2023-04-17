const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const content =  document.querySelector('#blog-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Fail');
    }
    }
};

const delButtonHandler =  async (event) => {
    if (event.target.hasAttribute('data_id')) {
        const id = event.target.getAttribute('data_id');

        const response =  await fetch(`/api/blogs/${id}`, {
            method: 'DELETE',
        });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Fail');
    }
    }
};

document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);

document   
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);