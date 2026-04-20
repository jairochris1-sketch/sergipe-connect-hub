import { Link } from "react-router-dom";
import { categories } from "@/data/mock";

type Props = { limit?: number };

const CategoryGrid = ({ limit }: Props) => {
  const items = limit ? categories.slice(0, limit) : categories;
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map(({ slug, name, icon: Icon, count }) => (
        <Link
          key={slug}
          to={`/categoria/${slug}`}
          className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-500 group-hover:scale-110">
            <Icon className="h-5 w-5" strokeWidth={1.6} />
          </div>
          <p className="mt-4 font-display text-base font-semibold leading-tight">{name}</p>
          <p className="mt-1 text-xs text-muted-foreground">{count} prestadores</p>
          <span className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-accent/0 transition-colors duration-500 group-hover:bg-accent/5" />
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;
