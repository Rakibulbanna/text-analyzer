# Text-analyzer

### Instructions

- First make an `.env ` file and copy all from `.env.example` and paste to the `.env ` you have created.

- After Install packages:

```bash
npm install
```

- After run the development server:

```bash
npm run dev
```

- Project will run `http://localhost:9000` port

## exposed API's Are:

## POST

- `save text to the database` [/api/text/save-text](#get-1billingretrieve-billing-datajson)
  **Parameters**

|   Name | Required |  Type  | Description                                 |
| -----: | :------: | :----: | ------------------------------------------- |
| `text` | required | string | Text have to provide in request body. <br/> |

**Response**

```
{
    "status": 200,
    "message": "A success message",
}

or any implemented error

{
    "status": 404,
    "error": "An error message"
}
```

---

## GET

- `Get all text list` [/api/text/list-text](#get-1billingretrieve-billing-datajson)
  **Response**

```
{
    "status": 200,
    "data": "An array",
}

or any implemented error

{
    "status": 400,
    "error": "An error message"
}
```

<br/>

- `GET` with parameter

  - `Get word count from particular doc` [ /api/text/word-count/:id](#get-1billingretrieve-billing-datajson) <br/>
  - `Get characters count from particular doc` [ /api/text/characters-count/:id](#get-1billingretrieve-billing-datajson) <br/>
  - `Get sentences count from particular do` [ /api/text/sentences-count/:id](#get-1billingretrieve-billing-datajson) <br/>
  - `Get paragraphs count from particular doc` [ /api/text/paragraphs-count/:id](#get-1billingretrieve-billing-datajson) <br/>
  - `Get longest word from particular doc` [ /api/text/longest-words/:id](#get-1billingretrieve-billing-datajson) <br/>

**Parameters**

| Name | Required |  Type  | Description                                   |
| ---: | :------: | :----: | --------------------------------------------- |
| `id` | required | string | `id` have to provide in request params. <br/> |

## PATCH

- `Edit a particular doc` [/api/text/edit-text/:id](#get-1billingretrieve-billing-datajson) <br/>

**Parameters**

|   Name | Required |  Type  | Description                                   |
| -----: | :------: | :----: | --------------------------------------------- |
|   `id` | required | string | `id` have to provide in request params. <br/> |
| `text` | required | string | `text` have to provide in request body. <br/> |

## DELETE

- `Delete a particular doc` [/api/text/delete-text/:id](#get-1billingretrieve-billing-datajson) <br/>

**Parameters**

| Name | Required |  Type  | Description                                   |
| ---: | :------: | :----: | --------------------------------------------- |
| `id` | required | string | `id` have to provide in request params. <br/> |
