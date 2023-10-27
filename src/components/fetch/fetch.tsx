export function fetchGet(url:string, stateSetter: (arg0: any) => void)
    {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            stateSetter(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }

export function fetchPost(url:string, content: any)
    {
        const reqOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(content)
        };

        fetch(url, reqOptions)
        .then(response => response.json())
        .then(data => console.log("Added ", data.name))
    }

export function fetchDelete(url:string, id: string)
{
    fetch(url + id + '/', {method: 'DELETE'})
    .then(() => console.log("Removed contact ", id ))
    .then(() => window.location.reload())
}

export function defineGender(value: boolean)
{
    if (value==false)
    {
        return 'Female';
    }
    else
    {
        return 'Male';
    }
}