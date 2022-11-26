import {
  FormItem,
  Input,
  Editable,
  Select,
  DatePicker,
  ArrayItems,
  FormButtonGroup,
  Submit,
  Space,
} from '@formily/next';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import SingleObject from './SingleObject';

const SchemaField = createSchemaField({
  components: {
    FormItem,
    DatePicker,
    Editable,
    Space,
    Input,
    Select,
    ArrayItems,
  },
});

const form = createForm();

function ArrayItemsDemo() {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Array
          name="array"
          title="对象数组"
          x-decorator="FormItem"
          x-component="ArrayItems"
        >
          <SchemaField.Object
            x-component={SingleObject}
            x-component-props={{
              SchemaField,
            }}
          />
          <SchemaField.Void
            x-component="ArrayItems.Addition"
            title="添加条目"
          />
        </SchemaField.Array>
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  );
}

export default ArrayItemsDemo;
