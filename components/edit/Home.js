import { TinaProvider, TinaCMS, useCMS, useForm, usePlugin } from 'tinacms';
// import { InlineForm } from 'react-tinacms-inline'

export default function Edit() {
  const formConfig = {
    id: 'tina-tutorial-index',
    label: 'Edit Page',
    fields: [
      {
        name: 'title',
        label: 'Title',
        component: 'text',
      },
      {
        name: 'body',
        label: 'Body',
        component: 'textarea',
      },
    ],
    initialValues: {
      title: "test title",
    },
    onSubmit: async () => {
      window.alert('Saved!')
    },
  }

  const [editableData, form] = useForm(formConfig)
  usePlugin(form)

  return (
    <section className="App-header">
      <h1>{editableData.title}</h1>
      <p>{editableData.body}</p>
    </section>
  );
}

