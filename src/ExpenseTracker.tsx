import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(10, {
    message: "Description must be of atleast 20 charecters",
  }),
  amount: z.number({ invalid_type_error: "Age must be a number" }).min(200),
  category: z.string({
    required_error: "Category is required",
  }),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    // console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 text-start">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          {...register("description")}
          type="text"
          className="form-control"
          // value={expense.description}
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3 text-start">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          {...register("amount", { valueAsNumber: true })}
          type="number"
          className="form-control"
          // value={expense.amount}
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3 text-start">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          className="form-select"
          id="category"
          {...register("category")}
          aria-label="Default select example"
          // value={expense.category}
        >
          <option defaultValue=""></option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseTracker;
