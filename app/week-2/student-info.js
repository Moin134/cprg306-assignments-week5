import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="mt-2">
      <p>Moin Multani</p>
      <Link 
        href="https://github.com/Moin134/cprg306-assignments" 
        className="text-blue-600 hover:underline"
      >
        https://github.com/Moin134/cprg306-assignments
      </Link>
    </div>
  );
}
