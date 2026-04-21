import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

// Types génériques pour <div> et <h2>
type DivProps = ComponentPropsWithoutRef<'div'>;
type HeadingProps = ComponentPropsWithoutRef<'h2'>;

export function Card({ className, ...props }: DivProps) {
  return (
    <div
      className={cn('rounded-lg border border-gray-200 bg-white shadow-sm', className)}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: DivProps) {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 p-6 border-b', className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn('text-2xl font-bold', className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: DivProps) {
  return (
    <div
      className={cn('p-6', className)}
      {...props}
    />
  );
}

export function CardFooter({ className, ...props }: DivProps) {
  return (
    <div
      className={cn('flex items-center justify-between p-6 border-t', className)}
      {...props}
    />
  );
}
